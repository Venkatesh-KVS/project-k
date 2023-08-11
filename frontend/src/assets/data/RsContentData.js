import ECHO from "../../components/services/rsArticles/2dECHO";
import CBCT from "../../components/services/rsArticles/CBCT";
import CT from "../../components/services/rsArticles/CT";
import ECG from "../../components/services/rsArticles/ECG";
import EEG from "../../components/services/rsArticles/EEG";

export const RsContentData = [
  {
    id: 1,
    slug: "two-dimensional-echocardiography",
    title: "2D ECHO (two-dimensional echocardiography)",
    category: "ECHO",
    excerpt:
      "2-Dimentional Echocardiography or ECHO is used to visualize the actual motion of the heart",
    productImage:
      "/konnect/images/srvcs/radiology/raiology_machines/2D_ECHO.jpg",
    component: <ECHO />,
  },
  {
    id: 2,
    slug: "cone-beamed-computed-tomography",
    title: "CBCT (Cone-Beamed Computed Tomography)",
    category: "CBCT",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/konnect/images/srvcs/radiology/raiology_machines/CBCT.jpg",
    component: <CBCT />,
  },
  {
    id: 3,
    slug: "computed-tomography",
    title: "CT (Computed Tomography)",
    category: "CT",
    excerpt:
      "Computed Tomography or CT is a medical imaging procedure that produces detailed images ",
    productImage: "/konnect/images/srvcs/radiology/raiology_machines/CT.jpg",
    component: <CT />,
  },
  {
    id: 4,
    slug: "electrocardiogram",
    title: "ECG (Electrocardiogram)",
    excerpt:
      "Electrocardiogram or ECG (also called EKG) is a simple, non-invasive test that is used",
    productImage: "/konnect/images/srvcs/radiology/raiology_machines/ECG.jpg",
    component: <ECG />,
  },
  {
    id: 5,
    slug: "electroencephalogram",
    title: "EEG (Electroencephalogram)",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/konnect/images/srvcs/radiology/raiology_machines/EEG.jpg",
    component: <EEG />,
  },
  {
    id: 6,
    slug: "cone-beamed-computed-tomography",
    title: "CBCT (Cone-Beamed Computed Tomography)",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage:
      "/konnect/images/srvcs/radiology/raiology_machines/Mammography.jpg",
  },
  {
    id: 7,
    slug: "cone-beamed-computed-tomography",
    title: "CBCT (Cone-Beamed Computed Tomography)",
    category: "CBCT",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/konnect/images/srvcs/radiology/raiology_machines/MRI.jpg",
  },
  {
    id: 8,
    slug: "cone-beamed-computed-tomography",
    title: "CBCT (Cone-Beamed Computed Tomography)",
    category: "CBCT",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/konnect/images/srvcs/radiology/raiology_machines/NCS.jpg",
  },
  {
    id: 9,
    slug: "cone-beamed-computed-tomography",
    title: "CBCT (Cone-Beamed Computed Tomography)",
    category: "CBCT",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/konnect/images/srvcs/radiology/raiology_machines/OPG.jpg",
  },
  {
    id: 10,
    slug: "cone-beamed-computed-tomography",
    title: "CBCT (Cone-Beamed Computed Tomography)",
    category: "CBCT",
    excerpt:
      "Cone-beamed computed tomography or CBCT is a form of medical imaging technology",
    productImage: "/konnect/images/srvcs/radiology/raiology_machines/PFT.jpg",
  },
];
