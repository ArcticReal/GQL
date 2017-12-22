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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const migrateAgreementWorkEffortAppl = {
  type: ResponseType,
  description: 'mutation for ofbiz migrateAgreementWorkEffortAppl method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingUpgrade/migrateAgreementWorkEffortAppl?`, null, req);
  }
};
export {migrateAgreementWorkEffortAppl};


const migrateFixedAssetMaintMeter = {
  type: ResponseType,
  description: 'mutation for ofbiz migrateFixedAssetMaintMeter method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingUpgrade/migrateFixedAssetMaintMeter?`, null, req);
  }
};
export {migrateFixedAssetMaintMeter};


const migrateStatusToFinAccountTrans = {
  type: ResponseType,
  description: 'mutation for ofbiz migrateStatusToFinAccountTrans method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingUpgrade/migrateStatusToFinAccountTrans?`, null, req);
  }
};
export {migrateStatusToFinAccountTrans};


const migrateStatusToGlReconciliation = {
  type: ResponseType,
  description: 'mutation for ofbiz migrateStatusToGlReconciliation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingUpgrade/migrateStatusToGlReconciliation?`, null, req);
  }
};
export {migrateStatusToGlReconciliation};
