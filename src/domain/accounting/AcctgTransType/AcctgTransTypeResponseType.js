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

const AcctgTransTypeResponseType = new GraphQLObjectType({
  name: 'AcctgTransTypeResponseType',
  description: 'response type for AcctgTransType',

  fields: () => ({
    acctgTransTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AcctgTransTypeResponseType};
    