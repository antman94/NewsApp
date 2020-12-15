import React from 'react'
import { 
    AppContainer,
    GeneralWhiteText
   } from '../../components/common/index.styled';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles(() =>({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'noWrap',
  },
  ButttonUnderTitle: {
    marginTop: '5%',
  },
  buttons: {
    martinTop: '10%',
    backgroundColor: 'yellow',
  },
  aboutText: {
    width: '80%',
    marginTop: '3%',
    marginBottom: '5%'
  },

  contentLeft: {
    marginLeft: '20%',
    width: '40%',
  },
  buy: {
    marginTop: '10%',
    marginLeft: '20%',
  },
  buyButtons: {
    marginTop: '10%',
    width: '300%',
  },


}))


function GameDetails() {

  const classes = useStyles();

  return (
    <AppContainer  className={classes.root}>
      <div className={classes.content}>

        {/* första diven */}
        <div className={classes.contentLeft}>
          <div>
            <GeneralWhiteText variant="p"> DATE</GeneralWhiteText>
            <GeneralWhiteText variant="p"> PLATFORMS</GeneralWhiteText>
          </div>
            <GeneralWhiteText variant="h3"><strong>Cyberpunk 2077</strong></GeneralWhiteText>
          <div className={classes.ButttonUnderTitle}>
            <Button
              variant="contained"
              size="medium"
              color="default"
              className={classes.buttons}
              startIcon={< CardGiftcardIcon/>}
              > Wishlist
            </Button>
          </div>
          <div className={classes.aboutText}>
            <GeneralWhiteText  variant="h6"><strong>About</strong></GeneralWhiteText>
            <GeneralWhiteText variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</GeneralWhiteText>
          </div>
          <div>
            <GeneralWhiteText  variant="h6"><strong>Publisher</strong></GeneralWhiteText>
          </div>
        </div>

        {/* andra diven */}
        <div className={classes.contentInfoTwo}>

            <div className={classes.buy}>
             <GeneralWhiteText variant="p"><strong>Where to buy</strong></GeneralWhiteText>
              <div className={classes.buyButtons}>
                <Button
                  variant="contained"
                  size="small"
                  color="default"
                  className={classes.buttons}
                  startIcon={< ShoppingCartIcon/>}
                  > Playstation
                </Button>
                <Button style={{marginLeft: '2%'}}
                  size="small"
                  variant="contained"
                  color="default"
                  className={classes.buttons}
                  startIcon={< ShoppingCartIcon/>}
                  > Steam
                </Button>
              </div>
            </div>
        </div>          
      </div>
    </AppContainer>
    // <AppContainer className={classes.root}>
    //   <div className={classes.leftSide}>
    //     <div className={classes.title} >
    //       <div>
    //         <GeneralWhiteText variant="p"> DATE</GeneralWhiteText>
    //         <GeneralWhiteText variant="p"> PLATFORMS</GeneralWhiteText>
    //       </div>
    //       <GeneralWhiteText variant="h3"><strong>Cyberpunk 2077</strong></GeneralWhiteText>
    //     </div>
    //     <div>
    //       <Button
    //         variant="contained"
    //         color="default"
    //         className={classes.whishlistButton}
    //         startIcon={< CardGiftcardIcon/>}
    //       > Wishlist
    //       </Button>
    //     </div>
    //     <div className={classes.about}>
    //       <GeneralWhiteText  variant="h6"><strong>About</strong></GeneralWhiteText>
    //       <GeneralWhiteText variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</GeneralWhiteText>
    //     </div>
    //     </div>
    //     <div className={classes.image}></div>
    //     <div><p>Store</p></div>
    // </AppContainer>
  )
}



export default GameDetails;
