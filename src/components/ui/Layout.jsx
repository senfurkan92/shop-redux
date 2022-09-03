export default function Layout({appheader, appfooter, children}) {
    return (
        <div className="min-h-[100vh] grid grid-rows-[max-content_auto_max-content] bg-base-100" data-theme="cupcake">
            <header className="p-4 bg-base-300 border-b border-warning">
                {appheader}
            </header>
            <main className="bg-base-100 md:p-8 p-4">
                <div className="container mx-auto">
                    {children}
                </div>
            </main>
            <footer className="p-4 border-t border-base-content bg-base-200">
                {appfooter}
            </footer>
        </div>
    )
}