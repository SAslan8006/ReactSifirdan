import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../../firebase/firebase-config"; // Firebase konfigürasyon dosyanız

// Kullanıcı giriş parametreleri için tip tanımı
interface LoginPayload {
  email: string;
  password: string;
}

// Redux Slice için state tipi
interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Başlangıç durumu
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// Async Thunk: Login işlemini yönetir
export const login = createAsyncThunk<User, LoginPayload>(
  "auth/login",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user; // Giriş yapan kullanıcı bilgisi
  }
);

// Redux Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true; // Login işlemi başlarken yükleniyor durumu
        state.error = null; // Eski hatayı sıfırla
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false; // Login işlemi başarılıysa
        state.user = action.payload; // Kullanıcı bilgilerini kaydet
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false; // Login işlemi başarısızsa
        state.error = action.error.message || "Bir hata oluştu"; // Hata mesajını kaydet
      });
  },
});

export default authSlice.reducer;
