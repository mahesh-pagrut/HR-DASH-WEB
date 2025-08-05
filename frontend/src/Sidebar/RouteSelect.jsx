import React from 'react';
import {
  FiHome,
  FiUsers,
  FiLink,
  FiActivity,
  FiFilter,
  FiAlertCircle,
  FiClock,
  FiBarChart2,
  FiSettings,
  FiLogOut
} from 'react-icons/fi'

const RouteSelect = () => {
  return (
    <div className="space-y-1">
  <Route Icon={FiHome} selected={true} title="Dashboard Overview" />
  <Route Icon={FiUsers} selected={false} title="Employee Directory" />
  <Route Icon={FiLink} selected={false} title="Interface Logs" />
  <Route Icon={FiFilter} selected={false} title="Advanced Filters" />
  <Route Icon={FiClock} selected={false} title="Execution History" />
  <Route Icon={FiAlertCircle} selected={false} title="Failure Notifications" />
  <Route Icon={FiActivity} selected={false} title="Real-Time Status" />
  <Route Icon={FiBarChart2} selected={false} title="Analytics & Trends" />
  <Route Icon={FiSettings} selected={false} title="System Settings" />
  {/* <Route Icon={FiLogOut} selected={false} title="Logout" /> */}
</div>
  );
};

const Route = ({ selected, Icon, title }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${selected
          ? 'bg-white text-stone-950 shadow'
          : 'hover:bg-stone-200 bg-transparent text-stone-500 shadow-none'
        }`}
    >
      <Icon className={selected ? 'text-violet-500' : ''} />
      <span>{title}</span>
    </button>
  );
};

export default RouteSelect;
