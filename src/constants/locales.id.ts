/**
 * Constant locales en file for the application
 */

const footerCard = {
  relatedRead: 'Bacaan terkait'
}

const profileCard = {
  memberSince: 'Member Hexanews sejak'
}

const forgotPasswordForm = {
  dialogTitle: 'Lupa Kata Sandi',
  dialogDescription: 'Masukkan email kamu di sini, kami akan kirimkan konfirmasi untuk menyetel kata sandi anda.',
  backLogin: 'Kembali ke Masuk',
  cancelButton: 'Batal',
  submitButton: 'Kirim',
  emailAddress: 'Alamat Email',
  enterEmail: 'Masukkan email',
  enterValidEmail: 'Masukkan email yang benar',
}

const loginForm = {
  dialogTitle: 'Masuk',
  dialogDescription: 'Masuk untuk mengakses beranda personil anda. Masukkan alamat email dan kata sandi anda.',
  emailAddress: 'Alamat Email',
  enterEmail: 'Masukkan email',
  enterValidEmail: 'Masukkan email yang benar',
  password: 'Kata Sandi',
  enterPassword: 'Masukkan kata sandi',
  passwordRequirement: 'Kata sandi harus diantara 6-20 huruf dan tidak mengandung huruf spesial',
  forgotPasswordLabel: 'Lupa Kata Sandi? ',
  noAccountLabel: 'Belum memiliki Akun? ',
  registerHereLabel: 'Daftar di sini',
  cancelButton: 'Batal',
  submitButton: 'Masuk',
}

const registerForm = {
  dialogTitle: 'Daftar',
  dialogDescription: 'Daftar untuk mengakses beranda personil anda. Masukkan alamat email dan kata sandi anda.',
  emailAddress: 'Alamat Email',
  enterEmail: 'Masukkan email',
  enterValidEmail: 'Masukkan email yang benar',
  password: 'Kata Sandi',
  enterPassword: 'Masukkan kata sandi',
  passwordRequirement: 'Kata sandi harus diantara 6-20 huruf dan tidak mengandung huruf spesial',
  name: 'Nama',
  enterName: 'Masukkan nama',
  minName: 'Nama harus lebih dari 3 huruf',
  maxName: 'Nama tidak boleh lebih dari 50 huruf',
  alphabeticName: 'Nama hanya bisa terdiri dari huruf alfabet',
  maxDescription: 'Deskripsi tidak boleh lebih dari 100 huruf',
  haveAccountLabel: 'Sudah memiliki Akun? ',
  loginHereLabel: 'Masuk di sini',
  cancelButton: 'Batal',
  submitButton: 'Daftar',
}

const categories = {
  exploreCategories: 'Lihat berbagai kategori'
}

const createArticle = {
  cancelButton: 'Batal',
  publishButton: 'Terbitkan',
  draft: 'Draf',
  title: 'Judul',
  category: 'Kategori',
  descriptionPlaceholder: 'Ceritakan kisah anda di sini...',
}

const account = {
  myAccount: 'Akun Saya',
  cancelButton: 'Batal',
}

const profileForm = {
  editProfile: 'Sunting Profil',
  saveButton: 'Simpan Profil',
  email: 'Email',
  name: 'Nama',
  description: 'Deskripsi',
  enterName: 'Masukkan nama',
  minName: 'Nama harus lebih dari 3 huruf',
  maxName: 'Nama tidak boleh lebih dari 50 huruf',
  alphabeticName: 'Nama hanya bisa terdiri dari huruf alfabet',
  maxDescription: 'Deskripsi tidak boleh lebih dari 100 huruf',
  editUserSuccess: 'Kamu telah berhasil memperbarui profilmu',
  changePasswordSuccess: 'Kamu telah berhasil mengganti passwordmu',
}

const changePasswordForm = {
  changePassword: 'Ganti Kata Sandi',
  currentPassword: 'Kata Sandi Saat Ini',
  newPassword: 'Kata Sandi Baru',
  confirmNewPassword: 'Konfirmasi Kata Sandi Baru',
  enterCurrentPassword: 'Masukkan kata sandi saat ini',
  enterNewPassword: 'Masukkan kata sandi terbaru anda',
  enterConfirmNewPassword: 'Masukkan konfirmasi kata sandi terbaru anda',
  passwordRequirement: 'Kata sandi harus diantara 6-20 huruf dan tidak mengandung huruf spesial',
  isPasswordMatch: 'Konfirmasi kata sandi harus sesuai dengan kata sandi terbaru anda',
}

const header = {
  signIn: 'Masuk',
  profile: 'Profil',
}

const home = {
  topStory: 'Article terpopuler Hexanews'
}

const profile = {
  myAccount: 'Akun Saya',
}

const articleDetail = {
  authorDeleted: 'Penulis telah dihapus',
  deleteArticle: 'Hapus artikel'
}

const searchArticle = {
  search: 'Cari Hexanews',
  noArticlesFound: `Kami tidak bisa menemukan artikel.`,
}

const notFound = {
  errorLabel: '404',
  noPage: 'Halaman tidak ditemukan.',
  homeLabel: 'Kembali ke beranda',
}

export default {
  account,
  articleDetail,
  categories,
  changePasswordForm,
  createArticle,
  footerCard,
  forgotPasswordForm,
  header,
  home,
  loginForm,
  notFound,
  profile,
  profileCard,
  profileForm,
  registerForm,
  searchArticle
}