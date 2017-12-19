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

const AgreementWorkEffortApplicInputType = new GraphQLInputObjectType({
  name: 'AgreementWorkEffortApplicInputType',
  description: 'input type for AgreementWorkEffortApplic',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {AgreementWorkEffortApplicInputType};
    