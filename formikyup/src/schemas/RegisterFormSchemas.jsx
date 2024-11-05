import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup
        .string()
        .email("Email formatı yanlıştır")
        .required("Email zorunludur"),
    yas: yup
        .number()
        .typeError("Yaş formatı yanlıştır")  // typeError ile hata mesajını özelleştirdik
        .required("Yaş zorunludur")
        .positive("Yaş pozitif olmalıdır")
        .integer("Yaş tam sayı olmalıdır")
        .min(18, "Yaş 18'den küçük olamaz")
        .max(65, "Yaş 65'ten büyük olamaz"),
    password: yup
        .string()
        .required("Şifre zorunludur")
        .min(6, "Şifre en az 6 karakter olmalıdır")
        .max(12, "Şifre en fazla 12 karakter olmalıdır")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
            "Şifre en az 1 rakam ve 1 harf içermelidir"
        ),
    confirmpassword: yup
        .string()
        .required("Şifre zorunludur")
        .oneOf([yup.ref("password"), null], "Şifreler aynı olmalıdır"),
    term: yup
        .boolean()
        .oneOf([true], "Kabul zorunludur")
        .required("Kabul zorunludur")
});
