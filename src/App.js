import React from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "../components/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import ShareIcon from "@material-ui/icons/Share";
import Divider from "@material-ui/core/Divider";
import MyCardContent from "../components/MyCardContent";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            <MyCardContent />
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
