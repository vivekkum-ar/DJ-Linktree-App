const NoPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-rol items-center justify-center">
        <h1 className="text-9xl font-pbold text-zinc-900 dark:text-white">4</h1>
      <img src="../../images/404.svg" className="w-40 h-40 "/>
        <h1 className="text-9xl font-pbold text-zinc-900 dark:text-white">4</h1>
      </div>
      <p className="text-3xl font-psemibold text-center dark:text-white">Page not found</p>
      <p className="text-xl font-plight text-center dark:text-zinc-400">We did'nt find the page you are looking for!</p>
    </div>
  )
}

export default NoPage