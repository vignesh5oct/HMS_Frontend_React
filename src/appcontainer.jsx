/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router";
// import Header from "./client/components/header.jsx";
// import Footer from "./client/components/footer.jsx";
// import TopHeader from "./client/components/topheader.jsx";
import LoginContainer from "./client/components/login/login.jsx";
import Register from "./client/components/register/register.jsx";
import ForgotPassword from "./client/components/forgot-password";

//blog
import BlogList from "./client/components/blog/bloglist";
import BlogGrid from "./client/components/blog/bloggrid";
import BlogDetails from "./client/components/blog/blogdetails";
//pages
import VideoCall from "./client/components/pages/videocall";
import VoiceCall from "./client/components/pages/voicecall";
import SearchDoctor from "./client/components/pages/searchdoctor/search-doctor1";
import Components from "./client/components/pages/component";
import Calendar from "./client/components/pages/calender";
import Invoice from "./client/components/pages/invoices/invoices";
import InvoiceView from "./client/components/pages/invoices/view";
import DoctorGrid from "./client/components/patients/doctorgrid";
import DoctorList from "./client/components/patients/doctorlist";
import DoctorProfile from "./client/components/patients/doctorprofile";
import DoctorChat from "./client/components/doctors/chat";
import PatientChat from "./client/components/patients/chat";
import MyPatient from "./client/components/doctors/mypatient";
import Booking from "./client/components/patients/booking/booking1";
import Booking2 from "./client/components/patients/booking/booking2";

import Checkout from "./client/components/patients/checkout";
import BookingSuccess from "./client/components/patients/booking-success";
import Dashboard from "./client/components/patients/dashboard";
import PatientDependent from "./client/components/patients/dependent";
import PatientAccounts from "./client/components/patients/accounts";
import Orders from "./client/components/patients/orders";
import MedicalRecords from "./client/components/patients/medicalrecords";
import MedicalDetails from "./client/components/patients/medicaldetails";
import Favourties from "./client/components/patients/dashboard/favourties";
import Profile from "./client/components/patients/dashboard/profile";
import Password from "./client/components/patients/dashboard/password";
import DoctorDashboard from "./client/components/doctors/dashboard";
import SocialMedia from "./client/components/doctors/socialmedia";
import ScheduleTiming from "./client/components/doctors/scheduletimings";
import DoctorPassword from "./client/components/doctors/password";
import Appointments from "./client/components/doctors/appointments";
import PatientProfile from "./client/components/doctors/patientprofile";
import AddPescription from "./client/components/doctors/addpescription";
import AddBilling from "./client/components/doctors/addbilling";
import ProfileSetting from "./client/components/doctors/profilesetting";
import Review from "./client/components/doctors/reviews";
import DoctorRegister from "./client/components/doctors/register";
import Registerstepone from "./client/components/doctors/register/registerstepone";
import Registersteptwo from "./client/components/doctors/register/registersteptwo";
import Registerstepthree from "./client/components/doctors/register/registerstepthree";
import Terms from "./client/components/pages/terms";
import Policy from "./client/components/pages/policy";
import Aboutus from "./client/components/pages/aboutus/aboutus";
import Contactus from "./client/components/pages/contactus/contactus";
import Patientregisterstepone from "./client/components/register/patientregisterstepone";
import Patientregistersteptwo from "./client/components/register/patientregistersteptwo";
import Patientregisterstepthree from "./client/components/register/patientregisterstepthree";
import Patientregisterstepfour from "./client/components/register/patientregisterstepfour";
import Patientregisterstepfive from "./client/components/register/patientregisterstepfive";
//pharmacy
import Pharmacy from "./client/components/Pharmacy/pharmacy";
import pharmacydetail from "./client/components/Pharmacy/pharmactdetail";
import PharmacySearch from "./client/components/Pharmacy/pharmacysearch";
import Cart from "./client/components/Pharmacy/cart";
import Product from "./client/components/Pharmacy/product";
import ProductDescription from "./client/components/Pharmacy/productdescription";
import ProductCheckout from "./client/components/Pharmacy/productcheckout";
import PayoutSuccess from "./client/components/Pharmacy/payoutsuccess";
import AppUniversal from "./admin/app-universal";
import PharmacyadminApp from "./pharmacyadmin/app-universal";
import BlankPage from "./client/components/pages/starter page/index.jsx";
import Pharmacyregister from "./client/components/Pharmacy/pharmacyregister";
import Pharmacyregisterstepone from "./client/components/Pharmacy/pharmacyregisterstepone";
import Pharmacyregistersteptwo from "./client/components/Pharmacy/pharmacyregistersteptwo";
import Pharmacyregisterstepthree from "./client/components/Pharmacy/pharmacyregisterstepthree";
import Doctorblog from "./client/components/blog/doctorblog/doctorblog";
import Doctoraddblog from "./client/components/blog/doctorblog/doctoraddblog";
import Doctorpendingblog from "./client/components/blog/doctorblog/doctorpendingblog";
import Doctoreditblog from "./client/components/blog/doctorblog/doctoreditblog";
import EditPrescription from "./client/components/doctors/patientprofile/edit-prescription";
import EditBilling from "./client/components/doctors/editbilling/index";
import MapList from "./client/components/patients/map-list/index";
import OnboardingEmail from "./client/components/pages/doctoronboarding/onboardingemail";
import OnboardingPersonalize from "./client/components/pages/doctoronboarding/onboardingpersonalize";
import OnboardingIdentity from "./client/components/pages/doctoronboarding/onboardingidentity";
import OnboardingPayments from "./client/components/pages/doctoronboarding/onboardingpayments";
// import onboardingpersonalize from "./client/components/pages/doctoronboarding/onboardingpayments";
import OnboardingPreferences from "./client/components/pages/doctoronboarding/onboardingpreferences";
import Onboardingverification from "./client/components/pages/doctoronboarding/onboardingverification";
import PatientOnboardingEmail from "./client/components/pages/patientonboarding/Email";
import PatientOnboardingPersonalize from "./client/components/pages/patientonboarding/Personalize";
import PatientOnboardingDetails from "./client/components/pages/patientonboarding/Details";
import PatientFamilyDetails from "./client/components/pages/patientonboarding/FamilyDetails";
import DependantDetails from "./client/components/pages/patientonboarding/DependantDetails";
import OtherDetails from "./client/components/pages/patientonboarding/OtherDetails";
import OnboardingEmailOtp from "./client/components/pages/doctoronboarding/onboardingemail-otp";
import Onboardingphone from "./client/components/pages/doctoronboarding/onboardingphone";
import Onboardingphoneotp from "./client/components/pages/doctoronboarding/onboardingphoneotp";
import Onboardingpassword from "./client/components/pages/doctoronboarding/onboardingpassword";
import PatientEmailOtp from "./client/components/pages/patientonboarding/PatientEmailOtp";
import PatientPhone from "./client/components/pages/patientonboarding/Patientphone";
import patientphoneotp from "./client/components/pages/patientonboarding/patientphoneotp";
import patientpassword from "./client/components/pages/patientonboarding/patientpassword";
import PhoneOtp from "./client/components/pages/patientonboarding/phoneotp";
import Producthealthcare from "./client/components/pages/producthealthcare/index";
import Comingsoon from "./client/components/pages/coming soon/index.jsx";
import Maintenance from "./client/components/pages/maintanence/index.jsx";
import PricingPlan from "./client/components/pages/pricing plan/index.jsx";
import Error404 from "./client/components/pages/error/Error404.jsx";
import Error500 from "./client/components/pages/error/Error500.jsx";
import LoginEmail from "./client/components/pages/authentication/login-email.jsx";
import LoginPhone from "./client/components/pages/authentication/login-phone.jsx";
import LoginEmailOtp from "./client/components/pages/authentication/login-email-otp.jsx";
import LoginPhoneOtp from "./client/components/pages/authentication/login-phone-otp.jsx";
import ForgotPassword2 from "./client/components/pages/authentication/forgot-password2.jsx";
import PatientSignup from "./client/components/pages/authentication/patient-signup.jsx";
import Signup from "./client/components/pages/authentication/signup.jsx";
import SuccessSignup from "./client/components/pages/authentication/success-signup.jsx";
import DoctorSignup from "./client/components/pages/authentication/doctor-signup.jsx";
import Faq from "./client/components/pages/faq/index.jsx";
import EmailOtp from "./client/components/pages/authentication/email-otp.jsx";
import MobileOtp from "./client/components/pages/authentication/phone-otp.jsx";
import AvailableTiming from "./client/components/doctors/availabletiming/index.jsx";
import Accounts from "./client/components/doctors/account/index.jsx";
import SearchDoctor2 from "./client/components/pages/searchdoctor/search-doctor2.jsx";
import DoctorAppointmentsGrid from "./client/components/doctors/appointments/doctorAppointmentsGrid.jsx";
import DoctorAppoinmentStart from "./client/components/doctors/appointments/doctorAppoinmentStart.jsx";
import DoctorCancelledAppointment from "./client/components/doctors/appointments/doctorCancelledAppointment.jsx";
import DoctorRequest from "./client/components/doctors/doctorRequest/index.jsx";
import DoctorUpcomingAppointment from "./client/components/doctors/appointments/doctorUpcomingAppointment.jsx";
import AvailableTimings from "./client/components/doctors/availableTimings/index.jsx";
import Experience from "./client/components/doctors/profilesetting/experience.jsx";
import DoctorSpecialities from "./client/components/doctors/specialities/index.jsx";
import DoctorPayment from "./client/components/doctors/doctorPayment/index.jsx";
import Education from "./client/components/doctors/profilesetting/education.jsx";
import Awards from "./client/components/doctors/profilesetting/award.jsx";
import InsuranceSettings from "./client/components/doctors/profilesetting/insurance.jsx";
import Clinic from "./client/components/doctors/profilesetting/clinic.jsx";
import BusinessSettings from "./client/components/doctors/profilesetting/business.jsx";
import DoctorCancelledAppointment2 from "./client/components/doctors/appointments/doctorCancelledAppointment2.jsx";
import DoctorAppoinmentDetails from "./client/components/doctors/appointments/doctorAppoinmentDetails.jsx";
import CompletedAppointment from "./client/components/doctors/appointments/completedAppointment.jsx";
import PatientInvoice from "./client/components/patients/patient-invoice/index.jsx";
import PatientAppointments from "./client/components/patients/appointments/index.jsx";
import CompletedAppoinments from "./client/components/patients/appointments/completedAppoinments.jsx";
import CancelledAppoinments from "./client/components/patients/appointments/cancelledAppoinments.jsx";
import UpComingAppointment from "./client/components/patients/appointments/upcomingAppointment.jsx";
import AppointmentGrid from "./client/components/patients/appointments/appointmentGrid.jsx";
import Home1 from "./client/components/home/home-1/index.jsx";
import { base_path } from "./environment.jsx";
import Home3 from "./client/components/home/home-3/index.jsx";
import Home5 from "./client/components/home/home-5/index.jsx";
import Home6 from "./client/components/home/home-6/index.jsx";
import Home7 from "./client/components/home/home-7/index.jsx";
import Home8 from "./client/components/home/home-8/index.jsx";
import Home9 from "./client/components/home/home-9/index.jsx";
import Home2 from "./client/components/home/home-2/index.jsx";
import Home10 from "./client/components/home/home-10/index.jsx";
import Home11 from "./client/components/home/home-11/index.jsx";
import Home12 from "./client/components/home/home-12/index.jsx";
import Home13 from "./client/components/home/home-13/index.jsx";
import Home14 from "./client/components/home/home-14/index.jsx";
import DoctorProfileTwo from "./client/components/patients/doctorprofile2/index.jsx";
import GeneralHomeOne from "./client/components/home/home-new/generalHomeOne.jsx";
import TwoStepAuthentication from "./client/components/patients/dashboard/two-step-authentication/twoStepAuthentication.jsx";
import DeleteAccount from "./client/components/patients/dashboard/delete-account/deleteAccount.jsx";
import Hospitals from "./client/components/pages/hospitals/hospitals.jsx";
import Speciality from "./client/components/pages/speciality/speciality.jsx";
import ClinicNew from "./client/components/pages/clinic/clinic.jsx";
import DoctorListAvailability from "./client/components/patients/doctor-list-availability/index.jsx";
import MapGrid from "./client/components/patients/map-grid/mapGrid.jsx";
import BookingWizard from "./client/components/patients/booking/bookingWizard.jsx";
import BookingPopup from "./client/components/patients/booking/bookingPopup.jsx";
import { useLocation } from "react-router";
const AppContainer = () => {
  const location = useLocation();
  const url = location.pathname.split("/")[1];

  useEffect(() => {
    // Your cursor effect code...
    const handleMouseMove = (event) => {
      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (cursorOuter) {
        cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }

      if (cursorInner) {
        cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    const handleMouseEnter = () => {
      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (cursorInner) {
        cursorInner.classList.add("s");
      }

      if (cursorOuter) {
        cursorOuter.classList.add("s");
      }
    };

    const handleMouseLeave = (event) => {
      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (
        event.target.tagName !== "A" ||
        !event.target.closest(".cursor-pointer")
      ) {
        if (cursorInner) {
          cursorInner.classList.remove("cursor-hover");
        }

        if (cursorOuter) {
          cursorOuter.classList.remove("cursor-hover");
        }
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");

    if (cursorInner) {
      cursorInner.style.visibility = "visible";
    }

    if (cursorOuter) {
      cursorOuter.style.visibility = "visible";
    }

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (url === "admin") {
    return <AppUniversal />;
  }

  if (url === "pharmacyadmin") {
    return <PharmacyadminApp />;
  }

  return (
    <Routes>
      {/* Authentication */}
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pages/forgot-password" element={<ForgotPassword />} />
      <Route path="/pages/forgot-password2" element={<ForgotPassword2 />} />
      <Route path="/pages/login-email" element={<LoginEmail />} />
      <Route path="/pages/login-phone" element={<LoginPhone />} />
      <Route path="/pages/email-otp" element={<LoginEmailOtp />} />
      <Route path="/pages/phone-otp" element={<LoginPhoneOtp />} />
      <Route path="/pages/eotp" element={<EmailOtp />} />
      <Route path="/pages/motp" element={<MobileOtp />} />
      <Route path="/pages/patient-signup" element={<PatientSignup />} />
      <Route path="/pages/doctor-signup" element={<DoctorSignup />} />
      <Route path="/success-signup" element={<SuccessSignup />} />
      <Route path="/signup" element={<Signup />} />

      {/* Blog */}
      <Route path="/blog/blog-list" element={<BlogList />} />
      <Route path="/blog/blog-grid" element={<BlogGrid />} />
      <Route path="/blog/blog-details" element={<BlogDetails />} />
      <Route path="/doctor-blog" element={<Doctorblog />} />
      <Route path="/blog/doctor-add-blog" element={<Doctoraddblog />} />
      <Route path="/blog/doctor-pending-blog" element={<Doctorpendingblog />} />
      <Route path="/blog/doctor-edit-blog" element={<Doctoreditblog />} />

      {/* Pages */}
      <Route path="/patient/doctor-grid" element={<DoctorGrid />} />
      <Route path="/patient/doctor-list" element={<DoctorList />} />
      <Route path="/patient/doctor-map-list-availability" element={<DoctorListAvailability />} />
      <Route path="/pages/video-call" element={<VideoCall />} />
      <Route path="/pages/voice-call" element={<VoiceCall />} />
      <Route path="/doctor/chat-doctor" element={<DoctorChat />} />
      <Route path="/patient/search-doctor1" element={<SearchDoctor />} />
      <Route path="/patient/search-doctor2" element={<SearchDoctor2 />} />
      <Route path="/pages/component" element={<Components />} />
      <Route path="/pages/blank-page" element={<BlankPage />} />
      <Route path="/pages/calendar" element={<Calendar />} />
      <Route path="/pages/invoice" element={<Invoice />} />
      <Route path="/doctor/invoices" element={<Invoice />} />
      <Route path="/pages/invoice-view" element={<InvoiceView />} />
      <Route path="/pages/aboutus" element={<Aboutus />} />
      <Route path="/pages/contactus" element={<Contactus />} />
      <Route path="/pages/comingsoon" element={<Comingsoon />} />
      <Route path="/pages/maintenance" element={<Maintenance />} />
      <Route path="/pages/pricing-plan" element={<PricingPlan />} />
      <Route path="/pages/error-404" element={<Error404 />} />
      <Route path="/pages/error-500" element={<Error500 />} />
      <Route path="/pages/faq" element={<Faq />} />
      <Route path="/pages/terms" element={<Terms />} />
      <Route path="/pages/privacy-policy" element={<Policy />} />
      <Route path="/pages/hospitals" element={<Hospitals />} />
      <Route path="/pages/speciality" element={<Speciality />} />
      <Route path="/pages/clinic" element={<ClinicNew />} />

      {/* Patient Routes */}
      <Route path="/patient/patientregisterstep-1" element={<Patientregisterstepone />} />
      <Route path="/patient/patientregisterstep-2" element={<Patientregistersteptwo />} />
      <Route path="/patient/patientregisterstep-3" element={<Patientregisterstepthree />} />
      <Route path="/patient/patientregisterstep-4" element={<Patientregisterstepfour />} />
      <Route path="/patient/patientregisterstep-5" element={<Patientregisterstepfive />} />
      <Route path="/patient/doctor-profile2" element={<DoctorProfile />} />
      <Route path="/patient/doctor-profile" element={<DoctorProfileTwo />} />
      <Route path="/patient/booking1" element={<Booking />} />
      <Route path="/patient/booking2" element={<Booking2 />} />
      <Route path="/booking" element={<BookingWizard />} />
      <Route path="/booking-popup" element={<BookingPopup />} />
      <Route path="/patient/patient-chat" element={<PatientChat />} />
      <Route path="/patient/checkout" element={<Checkout />} />
      <Route path="/patient/booking-success" element={<BookingSuccess />} />
      <Route path="/patient/dashboard" element={<Dashboard />} />
      <Route path="/patient/dependent" element={<PatientDependent />} />
      <Route path="/patient/accounts" element={<PatientAccounts />} />
      <Route path="/patient/orders" element={<Orders />} />
      <Route path="/patient/medicalrecords" element={<MedicalRecords />} />
      <Route path="/patient/medicaldetails" element={<MedicalDetails />} />
      <Route path="/patient/favourites" element={<Favourties />} />
      <Route path="/patient/profile" element={<Profile />} />
      <Route path="/patient/change-password" element={<Password />} />
      <Route path="/patient/two-factor-authentication" element={<TwoStepAuthentication />} />
      <Route path="/patient/delete-account" element={<DeleteAccount />} />
      <Route path="/patient/patient-invoice" element={<PatientInvoice />} />
      <Route path="/patient/patient-appointments" element={<PatientAppointments />} />
      <Route path="/patient/patient-completed-appointment" element={<CompletedAppoinments />} />
      <Route path="/patient/patient-cancelled-appointment" element={<CancelledAppoinments />} />
      <Route path="/patient/upcoming-appointment" element={<UpComingAppointment />} />
      <Route path="/patient/appoinment-grid" element={<AppointmentGrid />} />
      <Route path="/patient/map-gird" element={<MapGrid />} />
      <Route path="/patient/map-list" element={<MapList />} />

      {/* Doctor Routes */}
      <Route path="/doctor/my-patients" element={<MyPatient />} />
      <Route path="/doctor/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/doctor-payment" element={<DoctorPayment />} />
      <Route path="/doctor/doctor-request" element={<DoctorRequest />} />
      <Route path="/doctor/doctor-specialities" element={<DoctorSpecialities />} />
      <Route path="/doctor/social-media" element={<SocialMedia />} />
      <Route path="/doctor/schedule-timing" element={<ScheduleTiming />} />
      <Route path="/doctor/available-timing" element={<AvailableTiming />} />
      <Route path="/doctor/available-timings" element={<AvailableTimings />} />
      <Route path="/doctor/account" element={<Accounts />} />
      <Route path="/doctor/doctor-change-password" element={<DoctorPassword />} />
      <Route path="/doctor/appointments" element={<Appointments />} />
      <Route path="/doctor/doctor-appointments-grid" element={<DoctorAppointmentsGrid />} />
      <Route path="/doctor/doctor-appointment-start" element={<DoctorAppoinmentStart />} />
      <Route path="/doctor/doctor-cancelled-appointment" element={<DoctorCancelledAppointment />} />
      <Route path="/doctor/doctor-upcoming-appointment" element={<DoctorUpcomingAppointment />} />
      <Route path="/doctor/patient-profile" element={<PatientProfile />} />
      <Route path="/add-prescription" element={<AddPescription />} />
      <Route path="/add-billing" element={<AddBilling />} />
      <Route path="/doctor/profile-setting" element={<ProfileSetting />} />
      <Route path="/doctor/doctor-experience" element={<Experience />} />
      <Route path="/doctor/review" element={<Review />} />
      <Route path="/doctor/doctor-register" element={<DoctorRegister />} />
      <Route path="/registerstepone" element={<Registerstepone />} />
      <Route path="/register-step-2" element={<Registersteptwo />} />
      <Route path="/register-step-3" element={<Registerstepthree />} />
      <Route path="/doctor/education" element={<Education />} />
      <Route path="/doctor/doctor-awards-settings" element={<Awards />} />
      <Route path="/doctor/doctor-insurance-settings" element={<InsuranceSettings />} />
      <Route path="/doctor/doctor-clinics-settings" element={<Clinic />} />
      <Route path="/doctor/doctor-business-settings" element={<BusinessSettings />} />
      <Route path="/doctor/doctor-cancelled-appointment-2" element={<DoctorCancelledAppointment2 />} />
      <Route path="/doctor/doctor-appointment-details" element={<DoctorAppoinmentDetails />} />
      <Route path="/doctor/doctor-completed-appointment" element={<CompletedAppointment />} />
      <Route path="/editprescription" element={<EditPrescription />} />
      <Route path="/editbilling" element={<EditBilling />} />

      {/* Pharmacy */}
      <Route path="/Pharmacy/Pharmacy-index" element={<Pharmacy />} />
      <Route path="/Pharmacy/Pharmacy-details" element={<pharmacydetail />} />
      <Route path="/Pharmacy/pharmacy-search" element={<PharmacySearch />} />
      <Route path="/Pharmacy/product-all" element={<Product />} />
      <Route path="/Pharmacy/product-description" element={<ProductDescription />} />
      <Route path="/Pharmacy/cart" element={<Cart />} />
      <Route path="/Pharmacy/product-checkout" element={<ProductCheckout />} />
      <Route path="/Pharmacy/payment-success" element={<PayoutSuccess />} />
      <Route path="/Pharmacy/pharmacy-register" element={<Pharmacyregister />} />
      <Route path="/Pharmacy/pharmacy-registerstep-1" element={<Pharmacyregisterstepone />} />
      <Route path="/Pharmacy/pharmacy-registerstep-2" element={<Pharmacyregistersteptwo />} />
      <Route path="/Pharmacy/pharmacy-registerstep-3" element={<Pharmacyregisterstepthree />} />

      {/* Onboarding */}
      <Route path="/pages/onboarding-email" element={<OnboardingEmail />} />
      <Route path="/pages/onboarding-identity" element={<OnboardingIdentity />} />
      <Route path="/pages/onboarding-payments" element={<OnboardingPayments />} />
      <Route path="/pages/onboarding-personalize" element={<OnboardingPersonalize />} />
      <Route path="/pages/onboarding-preferences" element={<OnboardingPreferences />} />
      <Route path="/pages/onboarding-verification" element={<Onboardingverification />} />
      <Route path="/pages/patient-email" element={<PatientOnboardingEmail />} />
      <Route path="/pages/patient-personalize" element={<PatientOnboardingPersonalize />} />
      <Route path="/pages/patient-details" element={<PatientOnboardingDetails />} />
      <Route path="/pages/patient-family-details" element={<PatientFamilyDetails />} />
      <Route path="/pages/patient-dependant-details" element={<DependantDetails />} />
      <Route path="/pages/patient-other-details" element={<OtherDetails />} />
      <Route path="/pages/onboarding-email-otp" element={<OnboardingEmailOtp />} />
      <Route path="/pages/onboarding-phone" element={<Onboardingphone />} />
      <Route path="/pages/onboarding-phone-otp" element={<Onboardingphoneotp />} />
      <Route path="/pages/onboarding-password" element={<Onboardingpassword />} />
      <Route path="/pages/patient-email-otp" element={<PatientEmailOtp />} />
      <Route path="/pages/patient-phone" element={<PatientPhone />} />
      <Route path="/pages/patient-phone-otp" element={<patientphoneotp />} />
      <Route path="/pages/patient-password" element={<patientpassword />} />
      <Route path="/pages/product-healthcare" element={<Producthealthcare />} />
      <Route path="/pages/patient-phone-otp" element={<PhoneOtp />} />

      {/* Home routes */}
      <Route path="/" element={<GeneralHomeOne />} />
      <Route path="/home" element={<GeneralHomeOne />} />
      <Route path="/home-1" element={<Home1 />} />
      <Route path="/home-2" element={<Home2 />} />
      <Route path="/home-3" element={<Home3 />} />
      <Route path="/home-5" element={<Home5 />} />
      <Route path="/home-6" element={<Home6 />} />
      <Route path="/home-7" element={<Home7 />} />
      <Route path="/home-8" element={<Home8 />} />
      <Route path="/home-9" element={<Home9 />} />
      <Route path="/home-10" element={<Home10 />} />
      <Route path="/home-11" element={<Home11 />} />
      <Route path="/home-12" element={<Home12 />} />
      <Route path="/home-13" element={<Home13 />} />
      <Route path="/home-14" element={<Home14 />} />

      {/* Catch-all route */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppContainer;
