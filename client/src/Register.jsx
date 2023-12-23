export default function Register() {
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto">
                <input type="text" placeholder="Nom d'utilisateur" className="block w-full rounded-md p-2 mb-2 border" />
                <input type="password" placeholder="Mot de passe"  className="block w-full rounded-md p-2 mb-2 border"/>
                <button className="bg-blue-500 text-white block w-full rounded-md p-2">S'inscrire</button>
            </form>
        </div>
    )
}