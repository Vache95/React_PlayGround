export interface LoginType {
    email: string;
    languageID: string;
};

export interface CodeType extends LoginType {
    code: string;
}
