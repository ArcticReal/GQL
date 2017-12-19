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

const AcctgTransEntryTypeInputType = new GraphQLInputObjectType({
  name: 'AcctgTransEntryTypeInputType',
  description: 'input type for AcctgTransEntryType',

  fields: () => ({
    acctgTransEntryTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AcctgTransEntryTypeInputType};
    