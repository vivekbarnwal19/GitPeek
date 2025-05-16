import ThemeToggle from "./ThemeToggle";
function NavBar() {
    

    return (
        <>
            <div className="navbar-content">
                <h2 className="heading">GitPeek</h2>

                <ThemeToggle />
            </div>
        </>
    )
}
export default NavBar