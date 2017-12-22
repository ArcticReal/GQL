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

const AgreementWorkEffortApplicResponseType = new GraphQLObjectType({
  name: 'AgreementWorkEffortApplicResponseType',
  description: 'response type for AgreementWorkEffortApplic',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {AgreementWorkEffortApplicResponseType};
    