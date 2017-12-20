import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {DeliverableInputType} from '../../workeffort/Deliverable/DeliverableInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDeliverable = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDeliverable method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/deliverables/add?`, null, req);
  }
};
export {createDeliverable};


const updateDeliverable = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDeliverable method',
  args:{deliverableToBeUpdated: {type: DeliverableInputType},deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/deliverables/${args.deliverableId}?`, args.deliverableToBeUpdated, req);
  }
};
export {updateDeliverable};


const deleteDeliverableByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDeliverableByIdUpdated method',
  args:{deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/deliverables/${args.deliverableId}?`, null, req);
  }
};
export {deleteDeliverableByIdUpdated};
