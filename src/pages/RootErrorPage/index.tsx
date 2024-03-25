import { useRouteError } from 'react-router-dom';
import { RootError,RootErrorTitle,RootErrorDetails } from './styles';


const RootErrorPage = () => {
    const error = useRouteError();
   
    let errorDetails: string | undefined;

    if (error instanceof Error) {
        errorDetails = error.message;
    }

    return (
        <RootError>
            <RootErrorTitle>Something went wrong!</RootErrorTitle>
            <RootErrorDetails>({errorDetails})</RootErrorDetails>
        </RootError>
    );
};

export default RootErrorPage;