import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import { getStoreWithState } from '../../../fixtures/store';
import { EXCEPTIONS_REQUEST } from '../../../actions/actionTypes';
import ExceptionsPage from '../ExceptionsPage';

describe('ExceptionsPage', () => {
  it('renders initial state', () => {
    const store = getStoreWithState({
      exceptions: fromJS({
        data: [
          {
            collection: 'hep',
            error: 'Some error',
            recid: 123456,
          },
        ],
      }),
    });

    const wrapper = shallow(<ExceptionsPage store={store} />)
      .dive()
      .dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches exceptions', () => {
    const store = getStoreWithState({
      exceptions: fromJS({
        data: [
          {
            collection: 'hep',
            error: 'Some error',
            recid: 123456,
          },
        ],
      }),
    });
    mount(<ExceptionsPage store={store} />);
    const actions = store.getActions();
    expect(actions.some(action => action.type === EXCEPTIONS_REQUEST)).toBe(
      true
    );
  });
});
