
const url = "https://script.google.com/macros/s/AKfycbxsgbyDzTZAR4JPy7wnlfPIg_OenMdPoBvNiregbx2aT57PDBXu/exec";

interface EmailValues {
    email: string;
}

export function captureEmail(values: EmailValues) {
    const requestOptions: RequestInit = {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            sheet: "IdeasMuscle",
            cols: {
                Email: values.email
            }
        })
    };

    fetch(url, requestOptions);
}