import SignInButton from "./SignInButton";

const AppBar = () => {
    return (
        <header className="p-4 flex justify-between bg-slate-900">
            <div>
            <h1 className="text-2xl">Dev-Olution</h1>
            <h2 className="text-xl text-slate-400">Demo</h2>
            </div>
            <SignInButton />
        </header>
    )
}

export default AppBar;