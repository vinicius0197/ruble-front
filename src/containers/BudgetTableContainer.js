import { connect } from 'react-redux';
import BudgetTable from '../components/Dashboard/index';
import {addCategoryGroup} from '../actions/index';


const mapStateToProps = state => ({
  categories: state.CategoryGroupList
})

const mapDispatchToProps = dispatch => {
  return {
    onCreateCategoryClick: () => {
      dispatch(addCategoryGroup);
    }
  }
}

const BudgetTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetTable)

export default BudgetTableContainer;