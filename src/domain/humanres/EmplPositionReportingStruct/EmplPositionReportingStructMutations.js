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
import {EmplPositionReportingStructResponseType} from '../../humanres/EmplPositionReportingStruct/EmplPositionReportingStructResponseType.js';
import {EmplPositionReportingStructInputType} from '../../humanres/EmplPositionReportingStruct/EmplPositionReportingStructInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmplPositionReportingStruct = {
  type: EmplPositionReportingStructResponseType,
  description: 'mutation for ofbiz createEmplPositionReportingStruct method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionReportingStructs/add?`, null, req);
  }
};
export {createEmplPositionReportingStruct};


const deleteEmplPositionReportingStructByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplPositionReportingStructByIdUpdated method',
  args:{emplPositionReportingStructId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionReportingStructs/${args.emplPositionReportingStructId}?`, null, req);
  }
};
export {deleteEmplPositionReportingStructByIdUpdated};


const updateEmplPositionReportingStruct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplPositionReportingStruct method',
  args:{emplPositionReportingStructToBeUpdated: {type: EmplPositionReportingStructInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionReportingStructs/${args.nullVal}?`, args.emplPositionReportingStructToBeUpdated, req);
  }
};
export {updateEmplPositionReportingStruct};
