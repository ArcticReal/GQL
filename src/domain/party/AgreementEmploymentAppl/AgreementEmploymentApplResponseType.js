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

const AgreementEmploymentApplResponseType = new GraphQLObjectType({
  name: 'AgreementEmploymentApplResponseType',
  description: 'response type for AgreementEmploymentAppl',

  fields: () => ({
    agreementDate: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {AgreementEmploymentApplResponseType};
    