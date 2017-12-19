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

const SkillTypeInputType = new GraphQLInputObjectType({
  name: 'SkillTypeInputType',
  description: 'input type for SkillType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    skillTypeId: {type: GraphQLString}
  })
});

export {SkillTypeInputType};
    