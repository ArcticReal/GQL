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
import {EmplPositionReportingStructInputType} from '../../humanres/EmplPositionReportingStruct/EmplPositionReportingStructInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmplPositionReportingStruct = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplPositionReportingStruct method',
  args:{emplPositionReportingStructToBeAdded: {type: EmplPositionReportingStructInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionReportingStructs/add?`, args.emplPositionReportingStructToBeAdded, req);
  }
};
export {createEmplPositionReportingStruct};


const deleteEmplPositionReportingStructByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPositionReportingStructByIdUpdated method',
  args:{emplPositionReportingStructId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionReportingStructs/${args.emplPositionReportingStructId}?`, null, req);
  }
};
export {deleteEmplPositionReportingStructByIdUpdated};


const updateEmplPositionReportingStruct = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPositionReportingStruct method',
  args:{emplPositionReportingStructToBeUpdated: {type: EmplPositionReportingStructInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionReportingStructs/${args.nullVal}?`, args.emplPositionReportingStructToBeUpdated, req);
  }
};
export {updateEmplPositionReportingStruct};
