/**
 * Constant locales en file for the application
 */

const footerCard = {
  relatedRead: 'Related reads'
}

const profileCard = {
  memberSince: 'Hexanews member since'
}

const forgotPasswordForm = {
  dialogTitle: 'Forgot Password',
  dialogDescription: 'Put your email here, we will send a confirmation to reset your password',
  backLogin: 'Back to login',
  cancelButton: 'Cancel',
  submitButton: 'Submit',
  emailAddress: 'Email Address',
  enterEmail: 'Please enter email',
  enterValidEmail: 'Please enter a valid email',
}

const loginForm = {
  dialogTitle: 'Sign In',
  dialogDescription: 'Login to access your personalized homepage. Please enter your email address and password.',
  emailAddress: 'Email Address',
  enterEmail: 'Please enter email',
  enterValidEmail: 'Please enter a valid email',
  password: 'Password',
  enterPassword: 'Please enter password',
  passwordRequirement: 'Password length must be between 6-20 characters and contains no special character',
  forgotPasswordLabel: 'Forgot Password? ',
  noAccountLabel: 'Have no account? ',
  registerHereLabel: 'Register here',
  cancelButton: 'Cancel',
  submitButton: 'Sign In',
  loginSuccess: 'You have successfully login to the app'
}

const registerForm = {
  dialogTitle: 'Register',
  dialogDescription: 'Register to access your personalized homepage. Please enter your email address and password.',
  emailAddress: 'Email Address',
  enterEmail: 'Please enter email',
  enterValidEmail: 'Please enter a valid email',
  password: 'Password',
  enterPassword: 'Please enter password',
  passwordRequirement: 'Password length must be between 6-20 characters and contains no special character',
  name: 'Name',
  enterName: 'Please enter name',
  minName: 'Name field requires a minimum of 3 characters',
  maxName: 'Name field requires a maximum of 50 characters',
  alphabeticName: 'Name can only contain alphabetical characters',
  maxDescription: 'Description field requires a maximum of 100 characters',
  haveAccountLabel: 'Have an account? ',
  loginHereLabel: 'Login here',
  cancelButton: 'Cancel',
  submitButton: 'Register',
  registerSuccess: 'You have successfully register to the app, please login with it'
}

const categories = {
  exploreCategories: 'Explore categories'
}

const createArticle = {
  cancelButton: 'Cancel',
  publishButton: 'Publish',
  draft: 'Draft',
  title: 'Title',
  category: 'Category',
  required: 'Required',
  descriptionPlaceholder: 'Tell your story in here...',
  createArticleSuccess: 'You have created article successfully'
}

const editArticle = {
  cancelButton: 'Cancel',
  saveButton: 'Save',
  editing: 'Editing',
  title: 'Title',
  category: 'Category',
  required: 'Required',
  descriptionPlaceholder: 'Tell your story in here...',
  editArticleSuccess: 'You have successfully edit your article'
}

const account = {
  myAccount: 'My Account',
  cancelButton: 'Cancel',
}

const profileForm = {
  editProfile: 'Edit Profile',
  saveButton: 'Save Profile',
  email: 'Email',
  name: 'Name',
  description: 'Description',
  enterName: 'Please enter name',
  minName: 'Name field requires a minimum of 3 characters',
  maxName: 'Name field requires a maximum of 50 characters',
  alphabeticName: 'Name can only contain alphabetical characters',
  maxDescription: 'Description field requires a maximum of 100 characters',
  editUserSuccess: 'You have successfully update the user',
  changePasswordSuccess: 'You have successfully change the password',
}

const changePasswordForm = {
  changePassword: 'Change Password',
  currentPassword: 'Current Password',
  newPassword: 'New Password',
  confirmNewPassword: 'Confirm New Password',
  enterCurrentPassword: 'Please enter current password',
  enterNewPassword: 'Please enter new password',
  enterConfirmNewPassword: 'Please confirm new password',
  passwordRequirement: 'Password length must be between 6-20 characters and contains no special character',
  isPasswordMatch: 'Confirm new password must match new password',
}

const header = {
  signIn: 'Sign In',
  profile: 'Profile',
  logoutSuccess: 'You have logout successfully'
}

const home = {
  topStory: 'Top story of Hexanews'
}

const profile = {
  myAccount: 'My Account',
}

const articleDetail = {
  authorDeleted: 'Author is deleted',
  editArticle: 'Edit article',
  deleteArticle: 'Delete article',
  deleteArticleSuccess: 'You have successfully delete the article'
}

const searchArticle = {
  search: 'Search Hexanews',
  noArticlesFound: `We couldn't find any articles.`,
}

const notFound = {
  errorLabel: '404',
  noPage: 'There is no page here.',
  homeLabel: 'Back to home',
}

export default {
  account,
  articleDetail,
  categories,
  changePasswordForm,
  createArticle,
  editArticle,
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
  searchArticle,
}