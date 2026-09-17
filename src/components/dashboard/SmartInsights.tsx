import { useContext } from "react";

import { AppContext }
from "../../context/AppContext";

import {
  FiAlertTriangle,
  FiTrendingUp,
  FiCheckCircle,
  FiBookOpen,
} from "react-icons/fi";



export default function SmartInsights() {

  const ctx = useContext(AppContext);

  if (!ctx) return null;

  const {
    snapshot,
  } = ctx;

  const { strengths, weaknesses} = snapshot.report;

  const insights = [
    ...strengths,
    ...weaknesses,
  ];

  const getIcon = (
    type: typeof insights[number]["type"]
  ) => {

    switch (type) {

      case "warning":
        return <FiAlertTriangle />;

      case "achievement":
        return <FiCheckCircle />;

      case "trend":
        return <FiTrendingUp />;

      case "strength":
        return <FiBookOpen />;

      default:
        return <FiTrendingUp />;

    }

  };


  const getGroup = (
    importance: typeof insights[number]["importance"]
  ) => {

    if (importance === "critical")
      return "critical";

    if (
      importance === "high" ||
      importance === "medium"
    )
      return "important";

    return "positive";

  };

  
  const grouped = {

    critical:
      insights.filter(
        insight =>
          getGroup(insight.importance)
          === "critical"
      ),

    important:
      insights.filter(
        insight =>
          getGroup(insight.importance)
          === "important"
      ),

    positive:
      insights.filter(
        insight =>
          getGroup(insight.importance)
          === "positive"
      ),

  };

  return (
    <section className="dashboard-card">
      <h2>Smart Insights</h2>
  
      <div className="smart-insights-list">
        {insights.length === 0 ? (
          <p>Everything looks good.</p>
        ) : (
          <>
            {grouped.critical.length > 0 && (
              <>
                <h4 className="insight-group-title">Critical</h4>
                {grouped.critical.map((insight) => (
                  <div key={insight.id} className={`insight-row ${insight.type}`}>
                    <div className="insight-icon">{getIcon(insight.type)}</div>
                    <span>{insight.description}</span>
                  </div>
                ))}
              </>
            )}
  
            {grouped.important.length > 0 && (
              <>
                <h4 className="insight-group-title">Important</h4>
                {grouped.important.map((insight) => (
                  <div key={insight.id} className={`insight-row ${insight.type}`}>
                    <div className="insight-icon">{getIcon(insight.type)}</div>
                    <span>{insight.description}</span>
                  </div>
                ))}
              </>
            )}
  
            {grouped.positive.length > 0 && (
              <>
                <h4 className="insight-group-title">Positive</h4>
                {grouped.positive.map((insight) => (
                  <div key={insight.id} className={`insight-row ${insight.type}`}>
                    <div className="insight-icon">{getIcon(insight.type)}</div>
                    <span>{insight.description}</span>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}