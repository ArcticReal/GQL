
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

import {AgreementType} from '../../party/Agreement/AgreementType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';


const AgreementWorkEffortApplicType = new GraphQLObjectType({
  name: 'AgreementWorkEffortApplicType',
  description: 'Type for AgreementWorkEffortApplic in party',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (agreementWorkEffortApplic, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${agreementWorkEffortApplic.workEffortId}`)
    },
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementWorkEffortApplic, args, {loaders}) => loaders.ofbiz.load(`party/agreements/find?agreementId=${agreementWorkEffortApplic.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementWorkEffortApplicType};
    