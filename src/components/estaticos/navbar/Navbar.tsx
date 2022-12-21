import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';

const criarTemas = ['Criar Temas'];
const posts = ['Postagens'];
const temas = ['Temas'];
const logouts = ['Logout'];

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate()
    const dispatch = useDispatch()

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigate('/login')
    }

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link to='/home' className="text-decorator-none cursor">
                        <Typography variant="h6" noWrap component="a" 
                            className="navbarStyle"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            BlogSérgio
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {posts.map((post) => (
                                <MenuItem key={post} onClick={handleCloseNavMenu}>
                                    <Link to='/posts' className="cursor text-decorator-none">
                                    <Typography textAlign="center">{post}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {temas.map((tema) => (
                                <MenuItem key={tema} onClick={handleCloseNavMenu}>
                                    <Link to='/temas' className="cursor text-decorator-none">
                                    <Typography textAlign="center">{tema}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Link to='/home' className="text-decorator-none cursor">
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        className="navbarStyle2"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        BlogSérgio
                    </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {posts.map((post) => (
                            <Link to='/posts' className="text-decorator-none">
                            <Button
                                key={post}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {post}
                            </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {temas.map((tema) => (
                            <Link to='/temas' className="text-decorator-none">
                            <Button
                                key={tema}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {tema}
                            </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>


                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {criarTemas.map((criartema) => (
                                <MenuItem key={criartema} onClick={handleCloseUserMenu}>
                                    <Link to='/formularioTema' className="cursor text-decorator-none">
                                    <Typography textAlign="center">{criartema}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {logouts.map((logout) => (
                                <MenuItem key={logout} onClick={handleCloseUserMenu}>
                                    <Box className="cursor" onClick={goLogout}>
                                    <Typography textAlign="center">{logout}</Typography>
                                    </Box>
                                </MenuItem>
                            ))}
                            
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}
export default Navbar;
