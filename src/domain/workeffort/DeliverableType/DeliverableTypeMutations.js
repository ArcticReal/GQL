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
import {DeliverableTypeInputType} from '../../workeffort/DeliverableType/DeliverableTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDeliverableType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDeliverableType method',
  args:{deliverableTypeToBeAdded: {type: DeliverableTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/deliverable/deliverableTypes/add?`, args.deliverableTypeToBeAdded, req);
  }
};
export {createDeliverableType};


const updateDeliverableType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDeliverableType method',
  args:{deliverableTypeToBeUpdated: {type: DeliverableTypeInputType},deliverableTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/deliverable/deliverableTypes/${args.deliverableTypeId}?`, args.deliverableTypeToBeUpdated, req);
  }
};
export {updateDeliverableType};


const deleteDeliverableTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDeliverableTypeByIdUpdated method',
  args:{deliverableTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/deliverable/deliverableTypes/${args.deliverableTypeId}?`, null, req);
  }
};
export {deleteDeliverableTypeByIdUpdated};
