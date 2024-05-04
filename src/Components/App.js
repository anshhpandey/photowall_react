import { connect } from "react-redux"
import MainSection from "./MainSection"
import * as actions from "../redux/actions"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"

function mapStateToProps(state){
 return {
    posts:state.post,
    comment:state.comment
 }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators(actions,dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSection))

export default App