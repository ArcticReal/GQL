
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementType} from '../party/AgreementType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';


const AgreementWorkEffortApplicType = new GraphQLObjectType({
  name: 'AgreementWorkEffortApplicType',
  description: 'Type for AgreementWorkEffortApplic in party',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (agreementWorkEffortApplic, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${agreementWorkEffortApplic.workEffortId}`)
    },
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementWorkEffortApplic, args, {loaders}) => loaders.ofbiz.load(`agreements/find?agreementId=${agreementWorkEffortApplic.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementWorkEffortApplicType};
    