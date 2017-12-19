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

const AgreementTypeInputType = new GraphQLInputObjectType({
  name: 'AgreementTypeInputType',
  description: 'input type for AgreementType',

  fields: () => ({
    agreementTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AgreementTypeInputType};
    