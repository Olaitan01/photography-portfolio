import { useRouteError } from "react-router-dom";

function ErrorPage(){

    const error = useRouteError()
    console.log(error)
    return(
        <div id="error-page" className="text-[#ffffff] text-center flex justify-center flex-col text-[1rem]">
            <h1>Ooops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;