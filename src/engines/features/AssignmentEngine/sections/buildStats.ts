
import type { MetricCardModel } from "../../../core/models/MetricCardModel";
import type { AssignmentRuleContext } from "../models/AssignmentRuleContext";
import { buildMetricCards } from "../../../core/builders/buildMetricCards";



export function buildStats(

 context: AssignmentRuleContext

):MetricCardModel[] {

  


    return buildMetricCards([

        {
    
            id: "active",
    
            title: "Active",
    
            value: context.metrics.active,
    
            trend: `${context.metrics.active} in progress`,
    
            icon: "active",
    
            color: "primary",
    
        },
    
        {
    
            id: "completed",
    
            title: "Completed",
    
            value: context.metrics.completed,
    
            trend: `${context.metrics.completed} finished`,
    
            icon: "completion",
    
            color: "success",
    
        },
    
        {
    
            id: "overdue",
    
            title: "Overdue",
    
            value: context.metrics.overdue,
    
            trend:
    
                context.metrics.overdue === 0
    
                    ? "All caught up"
    
                    : "Needs attention",
    
            icon: "overdue",
    
            color:
    
                context.metrics.overdue === 0
    
                    ? "success"
    
                    : "danger",
    
        },
    
        {
    
            id: "priority",
    
            title: "High Priority",
    
            value: context.metrics.highPriority,
    
            trend: `${context.metrics.highPriority} urgent`,
    
            icon: "priority",
    
            color: "warning",
    
        },
    
    ]);

}