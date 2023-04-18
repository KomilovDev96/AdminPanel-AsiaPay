

/* ===== using ===== */
const REQUIRED_FIELD = 'Обязательно для заполнения';

/* ===== Sigin page -  using ===== */
export const numbers = {
    required: REQUIRED_FIELD,
};

/* ===== Sigin page -  using ===== */
export const RequeredInputs = {
    required: REQUIRED_FIELD,
}

// ===== passwordValidation Sigin page -  using =====
export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.length < 6) {
            return 'Пароль должен длиннее 6-ти символов'
        }
        return true;
    }
};
