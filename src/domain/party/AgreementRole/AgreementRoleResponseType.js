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

const AgreementRoleResponseType = new GraphQLObjectType({
  name: 'AgreementRoleResponseType',
  description: 'response type for AgreementRole',

  fields: () => ({
    agreementId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {AgreementRoleResponseType};
    