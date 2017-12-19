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
import {MrpEventTypeInputType} from '../../manufacturing/MrpEventType/MrpEventTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createMrpEventType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createMrpEventType method',
  args:{mrpEventTypeToBeAdded: {type: MrpEventTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`manufacturing/mrpEvent/mrpEventTypes/add?`, args.mrpEventTypeToBeAdded, req);
  }
};
export {createMrpEventType};


const updateMrpEventType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMrpEventType method',
  args:{mrpEventTypeToBeUpdated: {type: MrpEventTypeInputType},mrpEventTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`manufacturing/mrpEvent/mrpEventTypes/${args.mrpEventTypeId}?`, args.mrpEventTypeToBeUpdated, req);
  }
};
export {updateMrpEventType};


const deleteMrpEventTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMrpEventTypeByIdUpdated method',
  args:{mrpEventTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`manufacturing/mrpEvent/mrpEventTypes/${args.mrpEventTypeId}?`, null, req);
  }
};
export {deleteMrpEventTypeByIdUpdated};
