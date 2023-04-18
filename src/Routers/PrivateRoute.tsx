import React from "react";

const AddPortersPage = React.lazy(() => import("../Pages/AddPortersPage"));
const ClientsPage = React.lazy(() => import("../Pages/ClientsPage"));
const PortersPage = React.lazy(() => import("../Pages/PortersPage"));
const SettingsPage = React.lazy(() => import("../Pages/SettingsPage"));

export const privateRoute = [
    {
        path: "clients",
        component: <ClientsPage />,
        key: "UserClients",
    },
    {
        path: "porters",
        component: <PortersPage />,
        key: "Porters",
    },
    {
        path: "settings",
        component: <SettingsPage />,
        key: "SettingsPage",
    },
    {
        path: "addporters",
        component: <AddPortersPage />,
        key: "AddPorters",
    }
]