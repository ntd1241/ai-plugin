//We handle prompt inside this file, so exported functions take no paramater

export interface ResponseReturnProps {
    success: boolean,
    errorMsg?: string,
    response?: string,
}

export async function DraftResponse(): Promise<ResponseReturnProps> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                response: "Draft response"
            });
        }, 2000);
    });
}

export async function CorrectSpelling(): Promise<ResponseReturnProps> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: false,
                response: "Correct spelling",
                errorMsg: "Something went wrong. Please try again."
            });
        }, 2000);
    });
}

export async function ShortenResponse(): Promise<ResponseReturnProps> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                response: "Shorten response"
            });
        }, 2000);
    });
}

export async function LengthenResponse(): Promise<ResponseReturnProps> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: false,
                response: "Lengthen response",
                errorMsg: "Something went wrong. Please try again."
            });
        }, 2000);
    });
}