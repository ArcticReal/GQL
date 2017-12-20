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
import {MrpEventInputType} from '../../manufacturing/MrpEvent/MrpEventInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMrpEvent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createMrpEvent method',
  args:{mrpEventToBeAdded: {type: MrpEventInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`manufacturing/mrpEvents/add?`, args.mrpEventToBeAdded, req);
  }
};
export {createMrpEvent};


const deleteMrpEventByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteMrpEventByIdUpdated method',
  args:{mrpEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`manufacturing/mrpEvents/${args.mrpEventId}?`, null, req);
  }
};
export {deleteMrpEventByIdUpdated};


const updateMrpEvent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateMrpEvent method',
  args:{mrpEventToBeUpdated: {type: MrpEventInputType},mrpId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`manufacturing/mrpEvents/${args.mrpId}?`, args.mrpEventToBeUpdated, req);
  }
};
export {updateMrpEvent};
