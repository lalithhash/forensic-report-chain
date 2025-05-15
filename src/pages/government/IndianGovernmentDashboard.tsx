
import PageTitle from "@/components/common/PageTitle";
import DataCard from "@/components/common/DataCard";
import { Button } from "@/components/ui/button";
import { getAllCFSLs } from "@/lib/database";
import { PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndianGovernmentDashboard = () => {
  const cfsls = getAllCFSLs();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageTitle 
        title="Indian Government Dashboard" 
        description="Manage Central Forensic Science Laboratories"
        actions={
          <Button onClick={() => navigate('/manage-cfsls')}>
            <PlusIcon className="h-4 w-4 mr-2" /> Add CFSL
          </Button>
        }
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DataCard title="Total CFSLs" className="bg-blue-50">
          <div className="text-3xl font-bold">{cfsls.length}</div>
        </DataCard>

        <DataCard title="System Status" className="bg-green-50">
          <div className="text-lg font-medium text-green-600">Operational</div>
        </DataCard>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {cfsls.length > 0 ? (
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-muted-foreground">
              No recent activities to display
            </div>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-muted-foreground">
              No CFSLs registered yet. Add a CFSL to get started.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndianGovernmentDashboard;
