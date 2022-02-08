export const getFirstName = (fullName: string) => {
    let firstName =  fullName.split(" ")[0];
    return firstName
}

export const getLastName = (fullName: string) => {
    let lastName =  fullName.split(" ").slice(-1).join(" ");
    return lastName
}