import "./Style/publicpages.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./PublicPages/Home";
import About from "./PublicPages/About";
import Login from "./PublicPages/Login";
import Register from "./PublicPages/Register";
import Services from "./PublicPages/Services";
import Resources from "./PublicPages/Resources";
import Features from "./PublicPages/Features";
import Pricing from "./PublicPages/Pricing";
import Aerospace from "./PublicPages/Aerospace";
import Transport from "./PublicPages/Transport";
import Computer from "./PublicPages/Computer";
import Telecommunication from "./PublicPages/Telecommunication";
import Pharmaceutical from "./PublicPages/Pharmaceutical";
import Food from "./PublicPages/Food";
import Healthcare from "./PublicPages/Healthcare.jsx";
import Construction from "./PublicPages/Construction";
import Agriculture from "./PublicPages/Agriculture";
import Education from "./PublicPages/Education";
import Electronics from "./PublicPages/Electronics";
import Contact from "./PublicPages/Contact_Us";
import CustomerDashboard from "./User/CustomerDashboard.jsx";
import Communication from "./PublicPages/Communication";
import CustomerServices from "./PublicPages/CustomerServices";
import Promotions from "./PublicPages/Promotions";
import CrmMarketing from "./PublicPages/CrmMarketing";
import DegreeView from "./PublicPages/360-Degree-View";
import DigitalMobile from "./PublicPages/DigitalMobile";
import Planning from "./PublicPages/Planning";
import Analytics from "./PublicPages/Analytics";
import CrmAnalysis from "./PublicPages/CrmAnalysis";
import DigitalMarketing from "./PublicPages/DigitalMarketing";
import PrivacyPolicy from "./PublicPages/PrivacyPolicy";
import OurStory from "./PublicPages/OurStory";
import WhyChooseUs from "./PublicPages/WhyChooseUs";
import TearmOfUse from "./PublicPages/TermsOfUse";
import Lead from "./PublicPages/LeadManagement";
import Inventory from "./PublicPages/InventoryManagement";
import Process from "./PublicPages/ProcessManagement";
import InvoiceManagement from "./PublicPages/InvoiceManagement";
import ContactManagement from "./PublicPages/ContactManagement";
import TaskManagement from "./PublicPages/TaskManagement";
import SalesAutomation from "./PublicPages/SalesAutomation";
import SalesForecasting from "./PublicPages/SalesForecasting";
import DashboardAndReporting from "./PublicPages/DashboardAndReporting";
import ProductivityAnalysis from "./PublicPages/ProductivityAnalysis";
import EmailIntegration from "./PublicPages/EmailIntegration";
import OpportunityManagement from "./PublicPages/OpportunityManagement";
import ChoosingRightCRM from "./PublicPages/ChoosingRightCRM";
import CoreCRMFeatures from "./PublicPages/CoreCRMFeatures";
import OptionalCRMFeatures from "./PublicPages/OptionalCRMFeatures";
import CommonCRMFeatures from "./PublicPages/CommonCRMFeatures";
import StableGrowth from "./PublicPages/StableGrowth";
import ImprovedCommunication from "./PublicPages/ImprovedCommunication";
import Survey from "./PublicPages/Survey";
import CompetitorAnalysis from "./PublicPages/CompetitorAnalysis";
import Risk from "./PublicPages/Risk";
import Docmangement from "./PublicPages/Docmangement";
import WorkFlowManagement from "./PublicPages/WorkFlowManagement";
import ExpandBusiness from "./PublicPages/ExpandBusiness";
import CampaignManagement from "./PublicPages/CampaignManagement";
import StrongConnection from "./PublicPages/StrongConnection";
import DBIntigration from "./PublicPages/DBIntigration";
import OperationalManagement from "./PublicPages/OperationalManagement";
import CatalogSync from "./PublicPages/CatalogSync";
import SalesGoals from "./PublicPages/SalesGoals";
import PredictiveAnalystics from "./PublicPages/PredictiveAnalystics";
import CreateTask from "./User/Sections/CreateTask";
import NewCustomer from "./User/Sections/NewCustomer";
import NewVendor from "./User/Sections/NewVendor";
import NewLead from "./User/Sections/NewLead";
import AddProduct from "./User/Sections/AddProduct.jsx";
import AddProd from "./User/Sections/AddProd.jsx";
import DashboardV1 from "./User/DashboardV1.jsx";
import CustomerDetailsParent from "./User/Sections/CustomerDetailsParent.jsx";
import LeadDetailsParent from "./User/Sections/LeadDetailsParent.jsx";
import CreateInvoice from "./User/Sections/CreateInvoice.jsx";
import VendorDashboard from "./User/VendorDashboard.jsx";
import Product from "./User/Product.jsx";
import VendorDetailsParent from "./User/Sections/VendorDetailsParent.jsx";
import LeadDashboard from "./User/LeadDashboard.jsx";
import RegisterNewUserModal from "./User/components/RegisterNewUserModal.jsx";
import Setting from "./User/Setting.jsx";
import Company from "./User/Company.jsx";
import SecureRoutes from "./Utils/SecureRoutes.jsx";
import ImageToText from "./AI/ImageToText.jsx";

import FinanceAndAccounting from "./PublicPages/FinanceAndAccounting.jsx";
import GeneralLadger from "./PublicPages/GeneralLadger.jsx";
import HumanResource from "./PublicPages/HumanResource.jsx";
import ServiceManagement from "./PublicPages/ServiceManagement.jsx";
import Ecommerce from "./PublicPages/Ecommerce.jsx";
import DocumentManagement from "./PublicPages/DocumentManagement.jsx";
import AssetManagement from "./PublicPages/AssetManagement.jsx";
import RiskManagement from "./PublicPages/RiskManagement.jsx";
import BusinessIntelligence from "./PublicPages/BusinessIntelligence.jsx";
import SupplyChainManagement from "./PublicPages/SupplyChainManagement.jsx";
import AccountPayable from "./PublicPages/AccountPayable.jsx";
import AccountReceivable from "./PublicPages/AccountReceivable.jsx";
import FixedAssets from "./PublicPages/FixedAssets.jsx";
import BudgetingAndForecasting from "./PublicPages/BudgetingAndForecasting.jsx";
import CashManagement from "./PublicPages/CashManagement.jsx";
import TaxManagement from "./PublicPages/TaxManagement.jsx";
import PayrollManagement from "./PublicPages/PayrollManagement.jsx";
import TimeAndAttendence from "./PublicPages/TimeAndAttendence.jsx";
import Recruitment from "./PublicPages/Recruitment.jsx";
import TalentManagement from "./PublicPages/TalentManagement.jsx";
import EmployeDataManagement from "./PublicPages/EmployeDataManagement.jsx";
import TraningAndDevelopement from "./PublicPages/TrainingAndDevelopement.jsx";
import BenefitsAdministration from "./PublicPages/BenefitsAdministration.jsx";
import Procurement from "./PublicPages/Procurement.jsx";
import OrderManagement from "./PublicPages/OrderManagement.jsx";
import WarehouseManagement from "./PublicPages/WarehouseManagement.jsx";
import LogisticsAndShipping from "./PublicPages/LogisticsAndShipping.jsx";
import SupplierManagement from "./PublicPages/SupplierManagement.jsx";
import InventoryManagementSCM from "./PublicPages/InventoryManagementSCM.jsx"
import Manufacturing from "./PublicPages/Manufacturing.jsx";
import CustomerRelationshipManagement from "./PublicPages/CustomerRelationshipManagement.jsx";
import ProjectManagement from "./PublicPages/ProjectManagement.jsx";
import SalesAndDistribution from "./PublicPages/SalesAndDistribution.jsx";
import ProcurementPage from "./PublicPages/ProcurementPage.jsx";
import InventoryManagementPage from "./PublicPages/InventoryManagementPage.jsx";
import ProductPlanning from "./PublicPages/ProductPlanning.jsx";
import BiilOfMaterial from "./PublicPages/BillOfMaterials.jsx";
import SalesForceAutomation from "./PublicPages/SalesForceAutomation.jsx";
import CustomerServiceManagement from "./PublicPages/CustomerServiceManagement.jsx";
import MarketingAutomation from "./PublicPages/MarketingAutomation.jsx";
import LeadAndOpportunity from "./PublicPages/LeadAndOpportunity.jsx";
import ProjectPlanning from "./PublicPages/ProjectPlanning.jsx";
import ResourceAllocation from "./PublicPages/ResourceAllocation.jsx";
import TimeAndExpenseTracking from "./PublicPages/TimeAndExpenseTracking.jsx";
import ProjectAccounting from "./PublicPages/ProjectAccounting.jsx";
import ProjectCollaboration from "./PublicPages/ProjectCollaboration.jsx";


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SecureRoutes />}>
            <Route path="/crm-dashboard" element={<DashboardV1 />} />
            <Route path="customer-dashboard" element={<CustomerDashboard />} />
            <Route
              path="customer-details/:id"
              element={<CustomerDetailsParent isVendor={false} />}
            />
            <Route
              path="lead-details/:id"
              element={<LeadDetailsParent isVendor={false} />}
            />
            <Route
              path="vendor-details/:id"
              element={<VendorDetailsParent isVendor={true} />}
            />
            <Route path="create-task" element={<CreateTask />} />
            <Route path="new-customer" element={<NewCustomer />} />
            <Route path="new-vendor" element={<NewVendor />} />
            <Route path="new-vendor/:id" element={<NewVendor />} />
            <Route path="new-lead" element={<NewLead />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="add" element={<AddProd />} />
            

            <Route path="product" element={<Product />} />
            <Route path="product/:id" element={<Product />} />
            <Route
              path="vendor-dashboard"
              element={<VendorDashboard></VendorDashboard>}
            ></Route>
            <Route path="lead-dashboard" element={<LeadDashboard />} />
            <Route path="/modal" element={<RegisterNewUserModal />} />
            <Route path="/my-settings" element={<Setting />} />
            <Route path="/company-settings" element={<Company />} />
            <Route path="/create-invoice" element={<CreateInvoice />} />
            <Route path="/imagetotext" element={<ImageToText />} />
            
          </Route>
          <Route path="/" element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="contact_us" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="resources" element={<Resources />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="aerospace" element={<Aerospace />} />
          <Route path="transport" element={<Transport />} />
          <Route path="computer" element={<Computer />} />
          <Route path="telecommunication" element={<Telecommunication />} />
          <Route path="financeandaccounting" element ={<FinanceAndAccounting />}/>
          <Route path="pharmaceutical" element={<Pharmaceutical />} />
          <Route path="food" element={<Food />} />
          <Route path="healthcare" element={<Healthcare />} />
          <Route path="construction" element={<Construction />} />
          <Route path="agriculture" element={<Agriculture />} />
          <Route path="education" element={<Education />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="communication" element={<Communication />} />
          <Route path="customer_services" element={<CustomerServices />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="crmmarketing" element={<CrmMarketing />} />
          <Route path="360degreeview" element={<DegreeView />} />
          <Route path="digitalmobile" element={<DigitalMobile />} />
          <Route path="planning" element={<Planning />} />
          <Route path="crm_analysis" element={<CrmAnalysis />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="digitalmarketing" element={<DigitalMarketing />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="whychooseus" element={<WhyChooseUs />} />
          <Route path="termsofuse" element={<TearmOfUse />} />
          <Route path="leadmanagement" element={<Lead />} />
          <Route path="inventorymanagement" element={<Inventory />} />
          <Route path="processmanagement" element={<Process />} />
          <Route path="invoicemanagement" element={<InvoiceManagement />} />
          <Route path="contactmanagement" element={<ContactManagement />} />
          <Route path="taskmanagement" element={<TaskManagement />} />
          <Route path="salesautomation" element={<SalesAutomation />} />
          <Route path="salesforecasting" element={<SalesForecasting />} />
          <Route path="generalladger" element = {<GeneralLadger/>}/>
          <Route path="humanresource" element = {<HumanResource/>}/>
           <Route path="servicemanagement" element = {<ServiceManagement/>}/>
                    <Route path="assetmanagement" element = {<AssetManagement/>}/>
                    <Route path="ecommerce" element = {<Ecommerce/>}/>
                    <Route path="riskmanagement" element = {<RiskManagement/>}/>
                    <Route path="businessintelligence" element = {<BusinessIntelligence/>}/>
                    <Route path="documentmanagement" element = {<DocumentManagement/>}/>
          <Route path="supplychainmanagement" element= {<SupplyChainManagement/>}/>
          <Route path="accountpayable" element ={<AccountPayable/>}/>
          <Route path="accountreceivable" element ={<AccountReceivable/>}/>
          <Route path="fixedassets" element ={<FixedAssets/>}/>
          <Route path="budgetingandforecasting" element ={<BudgetingAndForecasting/>}/>
          <Route path="cashmanagement" element ={<CashManagement/>}/>
          <Route path="taxmanagement" element ={<TaxManagement/>}/>
          <Route path="payrollmanagement" element ={<PayrollManagement/>}/>
          <Route path="timeandattendance" element ={<TimeAndAttendence/>}/>
          <Route path="recruitment" element ={<Recruitment/>}/>
          <Route path="talentmanagement" element ={<TalentManagement/>}/>
          <Route path="employedatamanagement" element ={<EmployeDataManagement/>}/>
          <Route path="traininganddevelopement" element ={<TraningAndDevelopement/>}/>
          <Route path="benefitadministration" element ={<BenefitsAdministration/>}/>
          <Route path="procurement" element ={<Procurement/>}/>
          <Route path="ordermanagement" element ={<OrderManagement/>}/>
          <Route path="warehousemanagement" element ={<WarehouseManagement/>}/>
          <Route path="logisticsandshipping" element ={<LogisticsAndShipping/>}/>
          <Route path="suppliermanagement" element ={<SupplierManagement/>}/>
          <Route path="inventorymanagementscm" element ={<InventoryManagementSCM/>}/>
          <Route path="manufacturing" element ={<Manufacturing/>}/>
          <Route path="cutomarrelationship" element ={<CustomerRelationshipManagement/>}/>
          <Route path="projectmanagement" element ={<ProjectManagement/>}/>
          <Route path="salesanddistribution" element ={<SalesAndDistribution/>}/>
          <Route path="procurementpage" element ={<ProcurementPage/>}/>
          <Route path="inventorymanagementpage" element ={<InventoryManagementPage/>}/>
          <Route path="productplanning" element ={<ProductPlanning/>}/>
          <Route path="salesforceautomation" element ={<SalesForceAutomation/>}/>
          <Route path="billofmaterials" element ={<BiilOfMaterial/>}/>
          <Route path="customerservicemanagement" element ={<CustomerServiceManagement/>}/>
          <Route path="marketingautomation" element ={<MarketingAutomation/>}/>
          <Route path="contactmanagement" element ={<ContactManagement/>}/>
          <Route path="leadandopportunitymanagement" element ={<LeadAndOpportunity/>}/>
          <Route path="projectplanning" element ={<ProjectPlanning/>}/>
          <Route path="resourceallocation" element ={<ResourceAllocation/>}/>
          <Route path="timeandexpensetracking" element ={<TimeAndExpenseTracking/>}/>
          <Route path="projectaccounting" element ={<ProjectAccounting/>}/>
          <Route path="projectcollaboration" element ={<ProjectCollaboration/>}/>
          <Route
            path="dashboardandreporting"
            element={<DashboardAndReporting />}
          />
          <Route
            path="productivityanalysis"
            element={<ProductivityAnalysis />}
          />
          <Route path="emailintegration" element={<EmailIntegration />} />
          <Route
            path="opportunitymanagement"
            element={<OpportunityManagement />}
          />
          <Route path="choosingrightcrm" element={<ChoosingRightCRM />} />
          <Route path="corecrmfeatures" element={<CoreCRMFeatures />} />
          <Route path="optionalcrmfeatures" element={<OptionalCRMFeatures />} />
          <Route path="commoncrmfeatures" element={<CommonCRMFeatures />} />
          <Route path="stablegrowth" element={<StableGrowth />} />
          <Route
            path="improvedcommunication"
            element={<ImprovedCommunication />}
          />
          <Route path="survey" element={<Survey />} />
          <Route path="competitoranalysis" element={<CompetitorAnalysis />} />
          <Route path="risk" element={<Risk />} />
          <Route path="docmangement" element={<Docmangement />} />
          <Route path="workflowmanagement" element={<WorkFlowManagement />} />
          <Route path="expandbusiness" element={<ExpandBusiness />} />
          <Route path="campaignmanagement" element={<CampaignManagement />} />
          <Route path="strongconnection" element={<StrongConnection />} />
          <Route path="dbintigration" element={<DBIntigration />} />
          <Route
            path="operationalmanagement"
            element={<OperationalManagement />}
          />
          <Route path="catalogsync" element={<CatalogSync />} />
          <Route path="salesgoals" element={<SalesGoals />} />
          <Route
            path="predictiveanalystics"
            element={<PredictiveAnalystics />}
          />
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
