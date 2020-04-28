import React from "react";
import CardContent from "@material-ui/core/CardContent";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import MyFormControl from "./MyFormControl";
export default () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <CardContent>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="expansTitFir">STAKEHOLDERS</Typography>
          <Typography className="expansTitSec">
            {" "}
            2 yes, 1 no, 1 pending
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MyFormControl />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="typtxt">MESSAGE</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="mytext">
            Hi all, please see attached the latest design changes per our
            discussion and sign-off. Thanks!
            <br />
            <br />- Steven
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </CardContent>
  );
};
