

import { ChartSection, HeaderSection, StatsSection, TimelineSection, ToolbarSection, InsightsSection, ModalSection } from "./sections";

import { useAssignments } from "./hooks";


export default function Assignments() {

  const {
    assignments,
    model,
    display,
    ui,
  } = useAssignments();


  const {  stats,  insights } = model;

  return (
    <div className="page-content">
      
      <HeaderSection 
        onAdd={() => ui.setOpen(true)}
      />


      <StatsSection 
        stats={stats}
      />



      <ChartSection
        assignments={assignments}
      />

      <ToolbarSection
        search={ui.search}
        setSearch={ui.setSearch}
        filter={ui.filter}
        setFilter={ui.setFilter}
      />

  
      <TimelineSection
       display={display} 
      />

      <ModalSection
        open={ui.open}
        onClose={() => ui.setOpen(false)}
      />

      <InsightsSection
       insights={insights.items}
      
      />


    </div>
  );
}