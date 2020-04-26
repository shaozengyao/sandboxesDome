import React from "react";
import "./styles.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ShareIcon from "@material-ui/icons/Share";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Checkbox from "@material-ui/core/Checkbox";
import QueryBuilder from "@material-ui/icons/QueryBuilder";
import CancelIcon from "@material-ui/icons/Cancel";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
export default function App() {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState("panel1");
  const [state, setState] = React.useState({
    gilad: true,
    jason: true,
    antoine: false
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const checkBoxChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="App">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        打开弹窗
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="mydialog"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} />
        <DialogContent>
          <Card className="cardContent">
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  variant="square"
                  className="cardAvatar"
                />
              }
              title="Louver design change on market 
                street south side partition D-53 
                with butterfly stele"
              subheader="April 21, 2020, 1:29 AM (31 minutes ago)"
            />
            <Divider variant="middle" />
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
                  <FormControl component="fieldset" className="formcontrol">
                    <FormGroup>
                      <FormControlLabel
                        className="mycontrolLabel"
                        control={
                          <Checkbox
                            checked
                            onChange={checkBoxChange}
                            icon={<CheckCircleIcon fontSize="small" />}
                            checkedIcon={
                              <CheckCircleIcon
                                className="ischeked"
                                fontSize="small"
                              />
                            }
                            name="gilad"
                          />
                        }
                        label="Steven Banks (steven@acme.com)"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked
                            onChange={checkBoxChange}
                            icon={<CheckCircleIcon fontSize="small" />}
                            checkedIcon={
                              <CheckCircleIcon
                                className="ischeked"
                                fontSize="small"
                              />
                            }
                            name="jason"
                          />
                        }
                        label="Dan Smith (steven@acme.com)"
                      />
                      <FormControlLabel
                        className="spalabel"
                        control={<Checkbox icon={<CancelIcon />} />}
                        label="Xavier King (x@y.com)"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<QueryBuilder />}
                            disabled
                            name="checkedG"
                          />
                        }
                        label="Custom color"
                      />
                    </FormGroup>
                  </FormControl>
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
                    Hi all, please see attached the latest design changes per
                    our discussion and sign-off. Thanks!
                    <br />
                    <br />- Steven
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                className="filesBtn"
                startIcon={<PhotoLibraryIcon />}
              >
                Louver design ...
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="filesBtn"
                startIcon={<InsertPhotoIcon />}
              >
                Site photo
              </Button>
            </CardActions>
          </Card>
        </DialogContent>
        <DialogActions className="dialogFot">
          <div>
            <Button
              variant="outlined"
              className="signbtn"
              onClick={handleClose}
              color="primary"
            >
              SIGN-OFF
            </Button>
            <Button
              variant="outlined"
              className="rejectbtn"
              onClick={handleClose}
              color="primary"
              autoFocus
            >
              REJECT
            </Button>
          </div>
          <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
