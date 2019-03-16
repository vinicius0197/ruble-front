import { connect } from 'react-redux';
import { addCategoryElement } from '../actions/index';
import CategoryGroup from '../components/CategoryGroup/index';

const mapStateToProps = (state, ownProps) => ({
  elements: state.CategoryGroupList.elements
})

const mapDispatchToProps = dispatch => {
  return {
    onCreateElementClick: (id) => {
      dispatch(addCategoryElement(id));
    }
  }
}

const CategoryGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryGroup)

export default CategoryGroupContainer;