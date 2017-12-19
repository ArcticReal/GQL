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


const migrateAgreementWorkEffortAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz migrateAgreementWorkEffortAppl method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingUpgrade/migrateAgreementWorkEffortAppl?`, null, req);
  }
};
export {migrateAgreementWorkEffortAppl};


const migrateFixedAssetMaintMeter = {
  type: GraphQLString,
  description: 'mutation for ofbiz migrateFixedAssetMaintMeter method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingUpgrade/migrateFixedAssetMaintMeter?`, null, req);
  }
};
export {migrateFixedAssetMaintMeter};


const migrateStatusToFinAccountTrans = {
  type: GraphQLString,
  description: 'mutation for ofbiz migrateStatusToFinAccountTrans method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingUpgrade/migrateStatusToFinAccountTrans?`, null, req);
  }
};
export {migrateStatusToFinAccountTrans};


const migrateStatusToGlReconciliation = {
  type: GraphQLString,
  description: 'mutation for ofbiz migrateStatusToGlReconciliation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingUpgrade/migrateStatusToGlReconciliation?`, null, req);
  }
};
export {migrateStatusToGlReconciliation};
