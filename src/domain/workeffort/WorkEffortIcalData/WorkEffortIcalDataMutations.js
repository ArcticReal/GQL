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
import {WorkEffortIcalDataInputType} from '../../workeffort/WorkEffortIcalData/WorkEffortIcalDataInputType.js';
import {WorkEffortIcalDataResponseType} from '../../workeffort/WorkEffortIcalData/WorkEffortIcalDataResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortIcalData = {
  type: WorkEffortIcalDataResponseType,
  description: 'mutation for ofbiz createWorkEffortIcalData method',
  args:{workEffortIcalDataToBeAdded: {type: WorkEffortIcalDataInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortIcalDatas/add?`, args.workEffortIcalDataToBeAdded, req);
  }
};
export {createWorkEffortIcalData};


const updateWorkEffortIcalData = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortIcalData method',
  args:{workEffortIcalDataToBeUpdated: {type: WorkEffortIcalDataInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortIcalDatas/${args.nullVal}?`, args.workEffortIcalDataToBeUpdated, req);
  }
};
export {updateWorkEffortIcalData};


const deleteWorkEffortIcalDataByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortIcalDataByIdUpdated method',
  args:{workEffortIcalDataId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortIcalDatas/${args.workEffortIcalDataId}?`, null, req);
  }
};
export {deleteWorkEffortIcalDataByIdUpdated};
